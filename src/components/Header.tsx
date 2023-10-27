import { Logout } from '@/components/Logout';

export async function Header() {
  return (
    <nav className="flex px-10 py-5 items-center justify-end fixed top-0 left-0 w-full bg-dark-blue-primary">
      <Logout />
    </nav>
  );
}
