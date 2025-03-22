"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCrumber() {
  const pathname = usePathname();
  const pathnameArr = pathname?.split("/");
  pathnameArr?.shift();

  return (
    <div>
      <Breadcrumb className="m-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadCrumbSection pathnameArr={pathnameArr} />
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

type BreadCrumbSectionProps = {
  pathnameArr: string[];
};

export function BreadCrumbSection({ pathnameArr }: BreadCrumbSectionProps) {
  let url = "";

  const breadCrumbLinks = pathnameArr?.map((segment) => {
    url += `/${segment}`;
    console.log(url);
    return (
      <>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={url}>
              {segment?.charAt(0)?.toUpperCase() + segment?.slice(1)}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </>
    );
  });

  return breadCrumbLinks;
}
