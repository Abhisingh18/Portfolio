/**
 * Sutra-1.3B drawn the way the DeepSeek papers draw theirs: the residual
 * block first, then the two pieces that are not standard — the routed expert
 * FFN and the latent attention — opened up.
 *
 * Every figure in this file follows the model's own layer spec.
 */

function Node({
  x,
  y,
  w = 116,
  h = 40,
  label,
  sub,
  tone = "plain",
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  label: string;
  sub?: string;
  tone?: "plain" | "accent" | "ghost";
}) {
  const skin =
    tone === "accent"
      ? "fill-accent-soft stroke-accent/50"
      : tone === "ghost"
        ? "fill-ink stroke-line"
        : "fill-ink-raised stroke-line-strong";

  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={8} className={skin} strokeWidth={1} />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 2 : y + h / 2 + 4}
        textAnchor="middle"
        className="fill-fg"
        fontSize={12}
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 12}
          textAnchor="middle"
          className="fill-fg-faint"
          fontSize={9.5}
        >
          {sub}
        </text>
      )}
    </g>
  );
}

function Flow({ d }: { d: string }) {
  return (
    <path
      d={d}
      fill="none"
      className="stroke-line-strong"
      strokeWidth={1}
      markerEnd="url(#sutra-tip)"
    />
  );
}

function Defs() {
  return (
    <defs>
      <marker
        id="sutra-tip"
        viewBox="0 0 8 8"
        refX={6}
        refY={4}
        markerWidth={5}
        markerHeight={5}
        orient="auto-start-reverse"
      >
        <path d="M 0 1 L 7 4 L 0 7 z" className="fill-line-strong" />
      </marker>
    </defs>
  );
}

function Sum({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={13} className="fill-ink stroke-line-strong" strokeWidth={1} />
      <text x={cx} y={cy + 5} textAnchor="middle" className="fill-fg-muted" fontSize={14}>
        +
      </text>
    </g>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-[13px] leading-relaxed text-fg-faint">{children}</p>;
}

/* ------------------------------------------------------------------ */

function BlockFigure() {
  return (
    <svg
      viewBox="0 0 560 470"
      className="h-auto w-full"
      role="img"
      aria-label="One Sutra layer: pre-norm latent attention with a residual, then pre-norm Mixture-of-Experts feed-forward with a residual, repeated sixteen times."
    >
      <Defs />

      <text x={280} y={20} textAnchor="middle" className="fill-fg-muted" fontSize={11}>
        tokens → embedding (48,000 vocab · d_model 1024)
      </text>
      <Flow d="M 280 28 V 52" />

      <rect
        x={40}
        y={56}
        width={480}
        height={330}
        rx={14}
        fill="none"
        className="stroke-line"
        strokeWidth={1}
        strokeDasharray="5 4"
      />
      <text x={58} y={80} className="fill-accent" fontSize={10.5}>
        × 16 layers — layer 0 dense, 1–15 routed
      </text>

      <Flow d="M 280 88 V 98" />
      <Node x={222} y={102} w={116} h={30} label="RMSNorm" />
      <Flow d="M 280 132 V 150" />
      <Node x={202} y={154} w={156} label="Latent attention" sub="MLA · 16 heads" tone="accent" />
      <Flow d="M 280 194 V 208" />
      <Sum cx={280} cy={221} />
      <path
        d="M 280 95 H 100 V 221 H 263"
        fill="none"
        className="stroke-line-strong"
        strokeWidth={1}
        strokeDasharray="3 3"
        markerEnd="url(#sutra-tip)"
      />

      <Flow d="M 280 234 V 250" />
      <Node x={222} y={254} w={116} h={30} label="RMSNorm" />
      <Flow d="M 280 284 V 300" />
      <Node
        x={202}
        y={304}
        w={156}
        label="MoE feed-forward"
        sub="top-4 of 48 + 1 shared"
        tone="accent"
      />
      <Flow d="M 280 344 V 356" />
      <Sum cx={280} cy={369} />
      <path
        d="M 280 245 H 100 V 369 H 263"
        fill="none"
        className="stroke-line-strong"
        strokeWidth={1}
        strokeDasharray="3 3"
        markerEnd="url(#sutra-tip)"
      />

      <Flow d="M 280 382 V 404" />
      <Node x={222} y={408} w={116} h={30} label="RMSNorm" />
      <Flow d="M 280 438 V 452" />
      <text x={280} y={464} textAnchor="middle" className="fill-fg-muted" fontSize={11}>
        lm_head → 48,000 logits
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */

function MoEFigure() {
  // Eight drawn experts stand in for 48; the four selected ones are lit.
  const experts = [0, 1, 2, 3, 4, 5, 6, 7];
  const chosen = new Set([1, 3, 4, 6]);

  return (
    <svg
      viewBox="0 0 660 330"
      className="h-auto w-full"
      role="img"
      aria-label="The routed feed-forward: a sigmoid router scores 48 experts and sends each token to the top four, a shared expert sees every token, and their outputs are summed back onto the residual."
    >
      <Defs />

      <text x={16} y={20} className="fill-accent" fontSize={10.5}>
        MoE feed-forward
      </text>

      <Node x={16} y={140} w={78} h={40} label="token" tone="ghost" />
      <Flow d="M 94 160 H 128" />
      <Node x={132} y={132} w={104} h={56} label="Router" sub="sigmoid scoring" />

      {/* routed experts */}
      {experts.map((i) => {
        const x = 292 + i * 44;
        const lit = chosen.has(i);
        return (
          <g key={i}>
            <rect
              x={x}
              y={52}
              width={34}
              height={52}
              rx={6}
              className={
                lit ? "fill-accent-soft stroke-accent/60" : "fill-ink stroke-line"
              }
              strokeWidth={1}
            />
            <text
              x={x + 17}
              y={83}
              textAnchor="middle"
              className={lit ? "fill-fg" : "fill-fg-faint"}
              fontSize={10}
            >
              E
            </text>
          </g>
        );
      })}
      <text x={472} y={36} textAnchor="middle" className="fill-fg-faint" fontSize={10}>
        48 routed experts · width 512 · top-4 selected
      </text>

      {/* router → chosen experts */}
      {[...chosen].map((i) => {
        const x = 292 + i * 44 + 17;
        return <Flow key={i} d={`M 236 150 C 262 150 262 ${78} ${x - 2} 78`} />;
      })}
      <path
        d="M 236 168 C 262 168 262 78 288 78"
        fill="none"
        className="stroke-line"
        strokeWidth={1}
        strokeDasharray="2 4"
      />

      {/* shared expert */}
      <Node
        x={292}
        y={230}
        w={148}
        h={52}
        label="Shared expert"
        sub="every token, always"
        tone="accent"
      />
      <Flow d="M 236 176 C 262 176 262 256 288 256" />

      {/* merge */}
      {[...chosen].map((i) => {
        const x = 292 + i * 44 + 17;
        return <Flow key={`m${i}`} d={`M ${x} 104 C ${x} 140 580 120 592 152`} />;
      })}
      <Flow d="M 440 256 C 560 256 574 200 592 174" />
      <Sum cx={604} cy={163} />
      <text x={604} y={196} textAnchor="middle" className="fill-fg-faint" fontSize={9.5}>
        weighted
      </text>
      <text x={604} y={208} textAnchor="middle" className="fill-fg-faint" fontSize={9.5}>
        sum
      </text>

      <text x={132} y={214} className="fill-fg-faint" fontSize={9.5}>
        bias-based load balancing,
      </text>
      <text x={132} y={226} className="fill-fg-faint" fontSize={9.5}>
        not an auxiliary loss
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */

function MLAFigure() {
  return (
    <svg
      viewBox="0 0 700 360"
      className="h-auto w-full"
      role="img"
      aria-label="Multi-head latent attention: keys and values are read back from a single 256-wide compressed latent rather than cached in full, while a separate 32-dimension path carries the rotary position signal."
    >
      <Defs />

      <text x={16} y={20} className="fill-accent" fontSize={10.5}>
        Latent attention (MLA)
      </text>

      <Node x={16} y={150} w={72} h={44} label="hidden" sub="d_model 1024" tone="ghost" />

      {/* query path */}
      <Flow d="M 88 166 C 120 166 120 62 148 62" />
      <Node x={152} y={40} w={116} h={44} label="Query proj" sub="16 heads" />
      <Flow d="M 268 62 H 300" />
      <Node x={304} y={40} w={128} h={44} label="q = [64 ⊕ 32]" sub="nope ⊕ RoPE" tone="accent" />

      {/* kv compression */}
      <Flow d="M 88 172 H 148" />
      <Node x={152} y={150} w={116} h={44} label="Down-proj" sub="to latent" />
      <Flow d="M 268 172 H 300" />
      <Node x={304} y={144} w={128} h={56} label="c_KV · 256" sub="the only KV cache" tone="accent" />
      <Flow d="M 432 160 C 452 160 452 132 470 132" />
      <Node x={474} y={112} w={100} h={40} label="k_C" sub="64 / head" />
      <Flow d="M 432 184 C 452 184 452 214 470 214" />
      <Node x={474} y={194} w={100} h={40} label="v_C" sub="64 / head" />

      {/* decoupled rope key */}
      <Flow d="M 88 180 C 120 180 120 300 148 300" />
      <Node x={152} y={278} w={116} h={44} label="RoPE key" sub="decoupled" />
      <Flow d="M 268 300 H 300" />
      <Node x={304} y={278} w={128} h={44} label="k_R · 32 dims" sub="shared across heads" tone="accent" />
      <Flow d="M 432 300 C 500 300 470 160 470 146" />

      <text x={582} y={136} className="fill-fg-faint" fontSize={9.5}>
        keys = [k_C ⊕ k_R]
      </text>
      <text x={582} y={218} className="fill-fg-faint" fontSize={9.5}>
        values
      </text>

      <text x={330} y={348} textAnchor="middle" className="fill-fg-faint" fontSize={10}>
        Attention reads keys and values back out of the latent, so the KV cache stores 256 numbers a token, not 16 heads of them.
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */

export function SutraArchitecture() {
  return (
    <div className="space-y-12">
      <figure className="panel overflow-hidden p-6 md:p-8">
        <BlockFigure />
        <Caption>
          One layer, twice over: normalise, attend, add — normalise, route, add.
          The first layer keeps a dense feed-forward, because routing on raw
          embeddings is near-random and collapses early.
        </Caption>
      </figure>

      <figure className="panel overflow-x-auto p-6 md:p-8">
        <div className="min-w-lg">
          <MoEFigure />
        </div>
        <Caption>
          Each token is scored against 48 experts and sent to four of them. One
          shared expert sees every token, so the routed capacity is spent on
          what is particular rather than on what every token needs. This is why
          only 0.28B of 1.32B parameters are active per token.
        </Caption>
      </figure>

      <figure className="panel overflow-x-auto p-6 md:p-8">
        <div className="min-w-lg">
          <MLAFigure />
        </div>
        <Caption>
          Keys and values are compressed into one 256-wide latent and projected
          back out per head. Position is carried on a separate 32-dimension key
          shared across heads, which keeps rotary encoding intact even though
          the rest of the key was reconstructed from a compressed vector.
        </Caption>
      </figure>
    </div>
  );
}
