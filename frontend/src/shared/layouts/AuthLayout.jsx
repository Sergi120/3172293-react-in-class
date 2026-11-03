import { Outlet } from "react-router-dom";
import authBg from "@/assets/images/bg-3.jpg";

export default function AuthLayout() {
  return (
    <>
      <div
        className="min-h-screen w-full"
        style={{
          backgroundImage: `url(${authBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main className="mx-auto">
          {/* aqui se muestra la pagina hija, en este caso el login */}
          <Outlet />
        </main>
      </div>
    </>
  );
}
