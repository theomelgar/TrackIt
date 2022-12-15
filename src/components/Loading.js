import { ThreeDots } from 'react-loader-spinner'
export default function Loading() {
    return (
        <ThreeDots
            height="50"
            width="80"
            radius="9"
            color="#ffffff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    )
}