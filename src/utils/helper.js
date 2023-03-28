export function filterData(seaarchText, restaurant) {
    const filterData = restaurant.filter((restaurant) =>
        restaurant?.data?.name?.toLowerCase().includes(seaarchText.toLowerCase())
    );
    return filterData;
}
