export default function LoadingButton({btnText, isLoading, height, width, borderRadius, type, onClick}) {
    return (
      <div className={`${height} ${width} flex items-center justify-center py-3`}>
        <button
          type={type}
          disabled={isLoading}
          onClick={onClick}
          className={`w-full h-full font-montserrat font-semibold ${borderRadius} text-base tracking-widest
                      text-white bg-black border-4 border-black flex items-center justify-center
                      ${isLoading ? "" : "hover:bg-white hover:text-black transition-all duration-200"}`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="border-t-4 border-white border-solid rounded-full h-6 w-6 animate-spin"></div>
            </div>
          ) : (
            btnText
          )}
        </button>
      </div>
    );
}