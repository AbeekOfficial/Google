export default function Navbar({ darkTheme, setDarkTheme }) {
  return (
    <nav className="p-5 flex flex-wrap justify-end pb-3 items-center">
      <button
        className="bg-gray-900 dark:bg-gray-100 rounded-xl py-2 px-4 text-white dark:text-gray-900"
        type="button"
        onClick={() => setDarkTheme(!darkTheme)}
      >
        {darkTheme ? (
          <p className="text-black">Light ☀️</p>
        ) : (
          <p className="text-white">Dark 🌙</p>
        )}
      </button>
    </nav>
  );
}
