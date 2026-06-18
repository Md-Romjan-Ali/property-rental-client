const nextUri = process.env.NEXT_PUBLIC_API_URL
export const postOwnerProperty = async (ownerData) => {
    const res = await fetch(`${nextUri}/api/ownerpost`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ownerData)
    })
    return await res.json()
}
// client ssays
export const clientSays = async (clientSay) => {
    const res = await fetch(`${nextUri}/api/clientsays`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(clientSay)
    })
    const req = await res.json()
    return req;
}