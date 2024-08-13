function Loader() {
  return (
    <>
      <div  class="text-center spinner" >
        <div class="spinner-border" role="status" style={{width: "3rem", height: "3rem", textAlign: "center"}} >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default Loader;
