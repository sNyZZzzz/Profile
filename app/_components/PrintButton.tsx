import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function PrintButton() {
  return (
    <a
      className="hidden md:block print:hidden"
      href="javascript:window.print()"
    >
      <Button className="flex flex-row gap-3">
        <Download className="h-5 w-5" />
        Download
      </Button>
    </a>
  );
}
