// Кнопка завантаження додаткових зображень

function LoadMoreBtn({ onClick }) {
  return (
    <button onClick={onClick} className={css.loading}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;
