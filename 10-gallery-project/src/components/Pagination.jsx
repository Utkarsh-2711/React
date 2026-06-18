import React from "react";

const Pagination = ({ index, onPrev, onNext, canGoPrev, canGoNext }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center gap-4 border-t border-white/10 bg-black/90 p-4 backdrop-blur-sm">
            <button
                onClick={onPrev}
                disabled={!canGoPrev}
                className="cursor-pointer rounded bg-amber-300 px-4 py-2 text-sm font-semibold text-black active:scale-95 disabled:cursor-not-allowed disabled:opacity-50">
                Prev
            </button>
            <h4>Page {index}</h4>
            <button
                onClick={onNext}
                disabled={!canGoNext}
                className="cursor-pointer rounded bg-amber-300 px-4 py-2 text-sm font-semibold text-black active:scale-95 disabled:cursor-not-allowed disabled:opacity-50">
                Next
            </button>
        </div>
    );
};

export default Pagination;
