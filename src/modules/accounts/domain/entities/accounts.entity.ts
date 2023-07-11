export interface accountEntity {
    id: String,
    accountNickname: String,
    currency: String,
    accountType: "bank" | "cash",
    providerName: String,
    accountOwner: String,
    location: String,
    status: Number
}

export type createAccountDTO = Omit<accountEntity, "id">;