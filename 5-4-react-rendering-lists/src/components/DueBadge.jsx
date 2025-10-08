function daysUntil(dateStr) {
  const today = new Date();
  const due = new Date(dateStr + "T00:00:00");
  today.setHours(0,0,0,0);
  due.setHours(0,0,0,0);
  const diff = Math.round((due - today) / (1000 * 60 * 60 * 24));
  return diff;
}

export default function DueBadge({ dueDate }) {
  const d = daysUntil(dueDate)
  let label;
  d<0? label = "Overdue" : d===0? label ="Due today": d===1? label = "1 day remaining": label = `${d} days remaining`;
  const cl = d < 0 ? " danger" : d === 0 ? " warn" : "";

  return <span className={`badge${cl}`}>{label}</span>;

}
