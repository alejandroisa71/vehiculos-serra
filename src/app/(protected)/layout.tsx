import Navbar from "@/components/ui/navbar";

function ProtectedLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
        <Navbar/>
        {children}</div>
  )
}
export default ProtectedLayout