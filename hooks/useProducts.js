"use client";
import axios from "axios";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { useSWRConfig } from "swr";

import useBusiness from "./useBusiness";

export const useProducts = () => {
  const { istABusinessSelected } = useBusiness();
  const productsURL = `/api/v1/entity/${istABusinessSelected()}/products`;
  const {
    data,
    error: productsError,
    isLoading: productsIsLoading,
  } = useSWR(istABusinessSelected ? productsURL : null);
  const { mutate } = useSWRConfig();

  const getOneProduct = async (id) => {
    try {
      const response = await axios.get(`${productsURL}/${id}`);
      return response.data;
    } catch (error) {
      toast.error("Error al obtener el producto", {
        description: `Parece que hubo un error. ${error.message}`,
      });
      throw error;
    }
  };

  const createProduct = async (data) => {
    try {
      const response = await axios.post(productsURL, data);
      toast.success("Producto creado", {
        description: `El producto ${response.data.name} se ha creado correctamente.`,
      });
      mutate(productsURL);
      return response.data;
    } catch (error) {
      toast.error("Error al crear el producto", {
        description: `Parece que hubo un error. ${error.message}`,
      });
      throw error;
    }
  };

  const updateProduct = async (id, data) => {
    try {
      const response = await axios.put(`${productsURL}/${id}`, data);
      toast.success("Producto actualizado", {
        description: `El producto ${response.data.name} se ha actualizado correctamente.`,
      });
      mutate(productsURL);
      return response.data;
    } catch (error) {
      toast.error("Error al actualizar el producto", {
        description: `Parece que hubo un error. ${error.message}`,
      });
      throw error;
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(`${productsURL}/${id}`);
      toast.success("Producto eliminado", {
        description: `El producto se ha eliminado correctamente.`,
      });
      mutate(productsURL);
      return response.data;
    } catch (error) {
      toast.error("Error al eliminar el producto", {
        description: `Parece que hubo un error. ${error.message}`,
      });
      throw error;
    }
  };

  return {
    products: data?.products,
    productsError,
    productsIsLoading,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct,
  };
};

export default useProducts;
