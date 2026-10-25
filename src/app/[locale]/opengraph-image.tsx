import { ImageResponse } from 'next/og';

export const alt = 'Eldorado Tech — Innovate, Build, Elevate';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: '#f8fafc',
          color: '#0f172a',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '72px',
          position: 'relative',
          width: '100%',
        }}
      >
        <div style={{ background: '#dbeafe', borderRadius: 999, height: 520, position: 'absolute', right: -120, top: -180, width: 520 }} />
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', zIndex: 1 }}>
          <div style={{ alignItems: 'center', display: 'flex', gap: 18 }}>
            <div style={{ alignItems: 'center', background: '#1d4ed8', borderRadius: 20, color: 'white', display: 'flex', fontSize: 28, fontWeight: 800, height: 72, justifyContent: 'center', width: 72 }}>ET</div>
            <div style={{ display: 'flex', fontSize: 28, fontWeight: 800, letterSpacing: '0.12em' }}>ELDORADO&nbsp;<span style={{ color: '#1d4ed8' }}>TECH</span></div>
          </div>
          <div style={{ display: 'flex', fontSize: 76, fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.04, marginTop: 78, maxWidth: 920 }}>Digital solutions built for business growth.</div>
          <div style={{ alignItems: 'center', display: 'flex', fontSize: 24, fontWeight: 600, gap: 16, marginTop: 52 }}><span style={{ background: '#ea580c', borderRadius: 999, display: 'flex', height: 14, width: 14 }} />INNOVATE · BUILD · ELEVATE</div>
        </div>
      </div>
    ),
    size,
  );
}
