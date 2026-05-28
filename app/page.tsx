export default function RootRedirectPage() {
    return (
        <main className="min-h-screen bg-black">
            <meta httpEquiv="refresh" content="0;url=/home/" />
            <script
                dangerouslySetInnerHTML={{
                    __html: "window.location.replace('/home/');",
                }}
            />
        </main>
    );
}
