export const RestaurantCategory = ({ data }) => {
    // console.log(data);
    return (
        <div>
            {/* Accordians Header */}
            <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 flex justify-between">
                <span className="font-bold text-lg">{data.card.title} ({data.card.categories.length})</span>
                <span>⬇️</span>
            </div>

            {/* Accordians Body */}
        </div>
    )
}