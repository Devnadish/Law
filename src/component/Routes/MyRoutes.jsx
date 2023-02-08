import React,{Suspense,lazy} from 'react'
import {Routes, Route } from "react-router-dom";
import Loader from "../loader/Loader"
const Clients=lazy(()=>import("../../pages/clients/Clients"))
const NewClients=lazy(()=>import("../../pages/clients/NewClient"))
const UpdClient=lazy(()=>import("../../pages/clients/UpdClient"))
const Ahkam=lazy(()=>import("../../pages/ahkam/Ahkam"))
const Excute=lazy(()=>import("../../pages/excute/Excute"))

const Jalasat=lazy(()=>import("../../pages/jlasat/Jalasat"))

const Qdaya=lazy(()=>import("../../pages/qdaya/Qdaya"))

function MyRoutes() {
  return (
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="/">
        <Route index element={<Clients />} />
        <Route path="/clients" element={<Clients/>} />
        <Route path="/newclient" element={<NewClients/>} />
        <Route path="/updClient/:ClientId" element={<UpdClient/>} />
        <Route path="/ahkam" element={<Ahkam/>} />
        <Route path="/excute" element={<Excute/>} />
        <Route path="/jalasat" element={<Jalasat />} />
        <Route path="/qdaya" element={<Qdaya />} />
        
        
        
        {/* {/* <Route path="*" element={<PageNotFound />} /> */}
      </Route>
    </Routes>
  </Suspense>
  )
}

export default MyRoutes
