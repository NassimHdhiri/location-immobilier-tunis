import React from 'react'

function AsideTable(props) {
  return (
    <div>
        
<div className="relative overflow-y-auto h-[65%] shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Type
                </th>
                <td className="px-3 capitalize py-4">
                    {props.data.type}
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Size
                </th>
                <td className="px-6 py-4">
                    S+{props.data.size}
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Location
                </th>
                <td className="px-3 py-4 capitalize">
                    {props.data.location}
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Date Available
                </th>
                <td className=" py-4">
                    {props.data.dateAvailable}
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Floor
                </th>
                <td className="px-3 py-4">
                    {props.data.floor}
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Furnished
                </th>
                <td className="px-6 py-4">
                    {(props.data.furnished) ?'Yes' : 'No'}
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Electricity
                </th>
                <td className="py-4">
                    {(props.data.electricity) ?'Dependent' : 'Independent'}
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Water
                </th>
                <td className=" py-4">
                    {(props.data.water) ?'Dependent' : 'Independent'}
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Internet
                </th>
                <td className="py-4">
                    {(props.data.internet) ?'Dependent' : 'Independent'}
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Parking
                </th>
                <td className="px-6 py-4">
                    {(props.data.parking) ?'Yes' : 'No'}
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Security System
                </th>
                <td className="px-6 py-4">
                    {(props.data.securitySystem) ?'Yes' : 'No'}
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Pet Friendly
                </th>
                <td className="px-6 py-4">
                    {(props.data.petFriendly) ?'Yes' : 'No'}
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </div>
  )
}

export default AsideTable