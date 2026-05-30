import Link from "next/link";

type Video = {
  title: string;
  channel: string;
  url: string;
  duration?: string;
};

export default function YouTubeLinks({ videos }: { videos: Video[] }) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect width="24" height="24" rx="5" fill="#FF0000" />
          <polygon points="10,8 16,12 10,16" fill="white" />
        </svg>
        <p style={{ margin: 0, fontSize: "12px", fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Watch on YouTube
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column" as const, gap: "6px" }}>
        {videos.map((v) => (
          <Link
            key={v.url}
            href={v.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-sm)",
              padding: "12px 16px",
              textDecoration: "none",
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ margin: "0 0 2px", fontSize: "13px", fontWeight: 600, color: "var(--ink)", lineHeight: 1.3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}>
                {v.title}
              </p>
              <p style={{ margin: 0, fontSize: "11px", color: "var(--ink-3)" }}>
                {v.channel}{v.duration ? ` · ${v.duration}` : ""}
              </p>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
