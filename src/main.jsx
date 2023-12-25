import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AuthProvider from "./providers/AuthProvider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <DndProvider backend={HTML5Backend}>
          <RouterProvider router={router} />
        </DndProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
