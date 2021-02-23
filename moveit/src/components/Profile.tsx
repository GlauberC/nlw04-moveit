import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://i.pinimg.com/564x/51/f6/fb/51f6fb256629fc755b8870c801092942.jpg"
        alt="Foto de alguem"
      />
      <div>
        <strong>Nome da Pessoa</strong>
        <p>
          {" "}
          <img src="icons/level.svg" alt="level" /> Level 1
        </p>
      </div>
    </div>
  );
}
