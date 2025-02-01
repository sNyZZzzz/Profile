"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
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
    return (
      <>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={url}>
            {segment?.charAt(0)?.toUpperCase() + segment?.slice(1)}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </>
    );
  });

  return breadCrumbLinks;
}
