import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { CompanyStats, Service } from "../backend";
import { useActor } from "./useActor";

export function useServices() {
  const { actor, isFetching } = useActor();
  return useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getServices();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCompanyStats() {
  const { actor, isFetching } = useActor();
  return useQuery<CompanyStats>({
    queryKey: ["companyStats"],
    queryFn: async () => {
      if (!actor)
        return {
          yearsOfExperience: 25n,
          clientsServed: 500n,
          satisfactionRate: 98n,
        };
      return actor.getCompanyStats();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      message,
    }: { name: string; email: string; message: string }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContactForm(name, email, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contactSubmissions"] });
    },
  });
}
