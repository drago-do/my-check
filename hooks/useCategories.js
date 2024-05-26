"use client";
import axios from "axios";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { useSWRConfig } from "swr";

import useBusiness from "./useBusiness";

export const useCategories = () => {
  const { istABusinessSelected } = useBusiness();
  const categoriesURL = `/api/v1/entity/${istABusinessSelected()}/categories`;
  const {
    data,
    error: categoriesError,
    isLoading: categoriesIsLoading,
  } = useSWR(istABusinessSelected ? categoriesURL : null);
  const { mutate } = useSWRConfig();

  const getOneCategory = async (id) => {
    try {
      const response = await axios.get(`${categoriesURL}/${id}`);
      return response.data;
    } catch (error) {
      toast.error("Error al obtener la categoría", {
        description: `Parece que hubo un error. ${error.message}`,
      });
      throw error;
    }
  };

  const createCategory = async (data) => {
    try {
      const response = await axios.post(categoriesURL, data);
      toast.success("Categoría creada", {
        description: `La categoría ${response.data.name} se ha creado correctamente.`,
      });
      mutate(categoriesURL);
      return response.data;
    } catch (error) {
      toast.error("Error al crear la categoría", {
        description: `Parece que hubo un error. ${error.message}`,
      });
      throw error;
    }
  };

  const updateCategory = async (id, data) => {
    try {
      const response = await axios.put(`${categoriesURL}/${id}`, data);
      toast.success("Categoría actualizada", {
        description: `La categoría ${response.data.name} se ha actualizado correctamente.`,
      });
      mutate(categoriesURL);
      return response.data;
    } catch (error) {
      toast.error("Error al actualizar la categoría", {
        description: `Parece que hubo un error. ${error.message}`,
      });
      throw error;
    }
  };

  const deleteCategory = async (id) => {
    try {
      const response = await axios.delete(`${categoriesURL}/${id}`);
      toast.success("Categoría eliminada", {
        description: `La categoría se ha eliminado correctamente.`,
      });
      mutate(categoriesURL);
      return response.data;
    } catch (error) {
      toast.error("Error al eliminar la categoría", {
        description: `Parece que hubo un error. ${error.message}`,
      });
      throw error;
    }
  };

  return {
    categories: data?.categories,
    categoriesError,
    categoriesIsLoading,
    getOneCategory,
    createCategory,
    updateCategory,
    deleteCategory,
  };
};

export default useCategories;
