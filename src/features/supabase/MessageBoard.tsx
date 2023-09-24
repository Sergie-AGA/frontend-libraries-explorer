import Link from "next/link";

export default function MessageBoard() {
  return (
    <div className="message-board-container">
      <Link href="/1">
        <h2 className="message-board-header-link">Message Board</h2>
      </Link>
    </div>
  );
}
