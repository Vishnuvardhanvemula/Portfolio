export default function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-black/20 backdrop-blur-sm py-12 z-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Vishnu Vardhan. All rights reserved.
                </div>
                <div className="flex gap-6 text-sm text-muted-foreground">
                    <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
                    <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    );
}
