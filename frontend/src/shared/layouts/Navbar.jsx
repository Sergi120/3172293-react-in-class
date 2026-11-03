import { useState } from "react";
import { Menu } from "lucide-react";
import {
  IconButton,
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  SearchField,
} from "@/shared";
import logo from "@/assets/images/1-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/services/logoutService";

export default function Navbar() {
  // Componente de búsqueda 😂😂😂
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    console.log("Buscar:", value);
  };

  const handleClear = () => {
    console.log("Campo limpiado");
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="w-full bg-transparent border-b-2">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo de marca */}
          <div className=" hidden sm:block items-center">
            <Link to="/dashboard" className="text-h1 font-heading">
              <img src={logo} alt="logo" className="h-12" />
            </Link>
          </div>

          {/* Switch */}
          {/* inline-flex :Ocupa solo su contenido, no todo el ancho. */}

          {/* Links de navegación */}
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <Link to={"/auth"} className="hover:text-primary transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link to={"/dashboard"} className="hover:text-primary transition">
                Cursos
              </Link>
            </li>
            <li>
              <Link to={"/inicio"} className="hover:text-primary transition">
                Multimedia
              </Link>
            </li>
            <li>
              <Link to={"/inicio"} className="hover:text-primary transition">
                Contacto
              </Link>
            </li>
          </ul>

          {/**SearchField + iconButton */}

          <div>
            <SearchField
              value={search}
              onChange={setSearch}
              onSubmit={handleSearch}
              onClear={handleClear}
              placeholder="Buscar productos..."
              size="md"
              variant="outlined"
              className="w-76"
            />
          </div>

          {/* ======= Dropdown ======= */}

          <Dropdown>
            <div className="text-white">
              <DropdownTrigger>
                <IconButton arialabel="Menu de usuario">
                  <Menu />
                </IconButton>
              </DropdownTrigger>

              <DropdownContent>
                <DropdownItem>Gestionar Productos</DropdownItem>
                <DropdownItem>
                  <Link to="/dashboard/userCreate" className="block w-full">
                    Crear usuarios
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/dashboard/userList" className="block w-full">
                    Listar usuarios
                  </Link>
                </DropdownItem>
                <DropdownItem onClick={handleLogout}>
                  Cerrar sesion
                </DropdownItem>
                <DropdownItem>
                  <Link to="/dashboard/access" className="block w-full">
                    Admin
                  </Link>
                </DropdownItem>
              </DropdownContent>
            </div>
          </Dropdown>

          {/* Ícono de usuario */}
        </div>
      </div>
    </nav>
  );
}
