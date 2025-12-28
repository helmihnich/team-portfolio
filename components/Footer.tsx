export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 px-4 lg:px-20">
      <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-white">
          <div className="size-5 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor" />
            </svg>
          </div>
          <span className="font-bold tracking-tight">Strike Team</span>
        </div>
        <div className="flex gap-8 text-sm text-gray-500">
          <a className="hover:text-white transition-colors" href="#">Privacy</a>
          <a className="hover:text-white transition-colors" href="#">Terms</a>
          <a className="hover:text-white transition-colors" href="#">Twitter</a>
          <a className="hover:text-white transition-colors" href="#">LinkedIn</a>
        </div>
        <div className="text-xs text-gray-600">© {new Date().getFullYear()} Strike Team. All rights reserved.</div>      </div>
    </footer>
  );
}