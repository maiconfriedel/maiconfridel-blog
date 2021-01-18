import { parseISO, format } from "date-fns";
import ptbr from "date-fns/locale/pt-BR";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "LLLL dd, yyyy", { locale: ptbr })}
    </time>
  );
}
