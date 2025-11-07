/**
 * DEPRECATED: This file is no longer used.
 * 
 * The application has been migrated to Next.js App Router.
 * 
 * Please refer to:
 * - /app/layout.tsx - Root layout
 * - /app/page.tsx - Dashboard (homepage)
 * - /app/tenants/page.tsx - Tenants list
 * - /app/tenants/[id]/page.tsx - Tenant details
 * - /app/settings/page.tsx - Settings
 * 
 * See NEXTJS_MIGRATION.md for full details.
 */

export default function App() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>⚠️ Application Migrated to Next.js</h1>
      <p>This application has been converted to Next.js App Router.</p>
      <p>Please start the application using:</p>
      <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '4px' }}>
        npm run dev
      </pre>
      <p>Then open <strong>http://localhost:3000</strong> in your browser.</p>
      <hr style={{ margin: '2rem 0' }} />
      <p>See <strong>NEXTJS_MIGRATION.md</strong> for complete migration details.</p>
    </div>
  );
}
