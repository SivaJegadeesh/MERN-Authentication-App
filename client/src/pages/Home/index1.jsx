import styles from "./styles.module.css";

function Home(userDetails) {
  const user = {
    username: "Siva Jegadeesh C B",
    email: "siva@gmail.com",
  };
  const logout = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Home</h1>
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img className={styles.img} src="./images/profile.jpg" alt="login" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Profile</h2>
          <h className={styles.from_heading}>Welcome</h>
          <h className={styles.glowText}>{user.username}</h>
          <br />

          <button className={styles.btn} onClick={logout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
