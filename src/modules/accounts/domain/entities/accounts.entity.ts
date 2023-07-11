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