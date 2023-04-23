import img from 'images/img1.png'
import Image from 'next/image'
const Main = () => {
    return (
        <div className="flex justify-center items-center h-screen my-5">
            <div className="max-w-md mx-auto p-6 border rounded-md">
                <h1 className="text-4xl font-bold text-center mb-6">C.U.T.S</h1>
                <p className="text-xl text-center mb-6">
                    C.U.T.S is an electronic and classical music website that provides original content and reviews for music lovers.
                </p>
                <Image src={img} alt="MotoDidakt logo" className="rounded-full mx-auto mb-6" />
            </div>
        </div>
    );
};
export default Main;