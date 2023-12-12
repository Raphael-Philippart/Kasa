import { InterfaceLease } from "../Type/Lease";

export const getLeases = async (): Promise<Response|InterfaceLease> => {
    try {
        const response = await fetch(`/data/logements.json`) as unknown as InterfaceLease;
        return await response!.json();
    } catch (error) {
        console.error(error);
        throw(error);
    }
};

export const getLease = async (id: string): Promise<InterfaceLease[0]> =>  {
    try {
        const response: InterfaceLease = await getLeases() as InterfaceLease;
        return response!.find((logement: InterfaceLease[0]) => logement.id === id);
    } catch (error) {
        console.error(error);
        throw(error);
    }
};
