"use client"
import AntdFileUpload from "@/components/AntDesign/AntdFileUpload";
import AntdPagination from "@/components/AntDesign/AntdPagination";


export default function Home() {
  return (
    <main className="">
      <AntdPagination></AntdPagination>
      <AntdFileUpload></AntdFileUpload>
    </main>
  );
}
