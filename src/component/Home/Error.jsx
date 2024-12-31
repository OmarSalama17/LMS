import { Link } from "react-router-dom";

function Error() {
    return (
      <>
        <div className="">
          <main className="relative">
            <img 
              alt="" 
              src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=3050&amp;q=80&amp;exp=8&amp;con=-15&amp;sat=-75" 
              className="w-full h-screen object-cover"
            />
            <div className="absolute top-[35%] col-12 left-[50%]  transform -translate-x-1/2 -translate-y-1/2 text-center px-4 sm:px-8">
              <p className="font-roboto font-bold text-white text-[40px] sm:text-[50px] md:text-[60px] lg:text-[72px]">
                404
              </p>
              <h1 className="font-bold font-roboto text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] text-white">
                Page not found
              </h1>
              <p className="font-roboto pt-[10px] text-white text-[14px] sm:text-[16px] md:text-[18px]">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="flex justify-center font-roboto pt-[20px]">
                <Link 
                  to="/" 
                  className="no-underline font-bold text-white text-[14px] sm:text-[16px] md:text-[18px] hover:underline"
                >
                  <span aria-hidden="true" className="font-bold">←</span> Back to home
                </Link>
              </div>
            </div>
          </main>
        </div>
      </>
    );
}
export default Error;
