export const metadata = {
  title: "Home",
  description: "Rocky Road Rescue Home Page",
};
export default async function Home() {
  return (
    <div>
      <div className="font-medium w-full h-svh bg-[url('/dog-background-home.jpg')] bg-cover bg-center">
        <div className="text-white font-light font-teko pt-8 pl-8">
          <div className="w-1/2 bg-slate-900/25 rounded-lg min-h-96 ">
            <p className="">Rocky Road Rescue is a not-for-profit all-breed, foster-based, volunteer-run dog rescue in the Ottawa area.</p>
          </div>
        </div>
      </div>
      <div className="font-medium  w-full h-screen "> </div>
    </div>
  );
}
