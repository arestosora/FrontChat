import { create } from "zustand";
import { User } from "../gql/graphql";
import { persist } from "zustand/middleware";

interface UserState {
    id: number | undefined;
    fullName: string;
    email: string;
    avatarUrl: string | null;
    updateProfileImage: (image: string) => void;
    updateUsername: (user: string) => void;
    setUser: (user: User) => void;
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            id: undefined,
            fullName: "",
            email: "",
            avatarUrl: null,
            updateProfileImage: (image: string) => { set ({ avatarUrl: image })},
            updateUsername: (name: string) => { set ({ fullName: name})},
            setUser: (user: User) => {
                set({
                    id: user.id || undefined,
                    fullName: user.fullName,
                    email: user.email,
                    avatarUrl: user.avatarUrl,
                });
            },
        }),
        {
            name: "user-storage",
        }
    )
);
