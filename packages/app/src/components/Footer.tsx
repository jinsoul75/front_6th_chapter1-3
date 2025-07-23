import { memo } from "../../../lib/src/hocs/memo";

export const Footer = memo(function Footer() {
  return (
    <footer className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-md mx-auto py-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} 항해플러스 프론트엔드 쇼핑몰</p>
      </div>
    </footer>
  );
});
