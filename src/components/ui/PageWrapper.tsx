export default function PageWrapper({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-full bg-background text-foreground selection:bg-primary/30 selection:text-white overflow-hidden">
            {children}
        </main>
    );
}
