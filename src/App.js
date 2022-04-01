import './styles/pages/App.css';
import logo from './assets/OMARI.png'
import uiAsset from './assets/minecraft_PNG94.png'
import curseInstallation from './assets/curse-installation.png'
import launcherInstallation from './assets/launcher-installation.png'
import openFolderImg from './assets/openFolder-installation.png'
import copyFileImg from './assets/copyFile.png'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className='header__container'>
          <img src={logo}/>
        </header>
        <section className='main__section__container'>
          <div className='main__info__container'>
            <h1>Rejoignez Omari Serveur ! lolo</h1>
            <p>Serveur Better Minecraft, plus de 220 mods installés !</p>
            <p className='main__info__server__name'>omari.mine.fun</p>
          </div>
          <div className='main__img__container'>
            <img src={uiAsset} alt="img"/>
          </div>
        </section>
        <section className='install__container'>
          <div className='install__type__container'> 
            <p>Je possède une version légale du jeu ?</p>
            <div className="install__container__btn"><a href="#legal-installation" className='installation__btn'>Guide d'installation</a></div>
          </div>
          <div className='install__type__container'>
            <p>Je ne possède pas une version légale du jeu ?</p>
            <div className="install__container__btn"><a href="#illegal-installation" className='installation__btn'>Guide d'installation</a></div>
          </div>
        </section>

        <section className='legal__install__container' id="legal-installation">
          <h1>Installation pour la version légale</h1>
          <p>Afin de rejoindre le serveur, vous devez installer une version du jeu tournant sur Forge 1.16.5 avec le modpacks Better Minecraft</p>
          <ol className='list__install'>
            <li>1) Dans un premier temps, vous devez télécharger <a href='https://download.curseforge.com/'>CurseForge</a> qui vous servira à télécharger le modpack. Choisisez la version correspondante à votre système d'expoitation (Windows ou Mac) et procédez à son installation.</li>
            <li>2) Dans un second temps, lancez CurseForge, choisisez le jeu Minecraft et rechercher Better Minecraft. Installez Better Minecraft [Forge] 1.16.5.
              <img className='list__img' src={curseInstallation} alt="img"/>
            </li>
            <li>3) Cliquez sur Play, le launcher Minecraft se lancera automatiquement. Lancez le jeu.</li>
          </ol>
        </section>

        <section className='illegal__install__container' id="illegal-installation">
          <h1>Installation pour la version illégale</h1>
          <p>Afin de rejoindre le serveur, vous devez installer une version du jeu tournant sur Forge 1.16.5 avec le modpacks Better Minecraft</p>
          <ol className='list__install'>
            <li>1) Dans un premier temps, vous devez télécharger un launcher pour lancer le jeu. Nous vous conseillons <a href='https://atlauncher.com/downloads'>ATLauncher</a>. Choisisez la version correspondante à votre système d'expoitation (Windows ou Mac, Linux) et procédez à son installation.</li>
            <li>2) Dans un second temps, lancez le launcher et installez une version Forge 1.16.5. Lancez l'intallation.
              <img className='list__img' src={launcherInstallation} alt="img"/>
            </li>
            <li>3) Une fois l'installation effectuée, rendez vous dans le dossier d'installation du jeu en cliquant ici : 
                <img className='list__img' src={openFolderImg} alt="img"/>
               </li>
            <li>4) Télécharger le <a href="https://mega.nz/file/dolGVCaI#UiJgwtbwl1G2KjP_PYh5GOMPLyHh-vLibx1NvV6tLgs">packminecraft.rar</a></li>
            <li>5) Copié l'intégralité du dossier a_copié de l'archive "packminecraft.rar" que vous venez de télécharger
              <img className='list__img' src={copyFileImg} alt="img"/>
            </li>
            <li>6) Retournez dans le launcher Minecraft, cochez "Mettre à jour le client" et lancez le jeu. Le premier lancement peut prendre du temps</li>
          </ol>
        </section>

        <section className='connect__container'>
          <h1>Se connecter</h1>
          <p className='connect__info'>omari.mine.fun</p>
          
        </section>
      </div>
    </div>
  );
}

export default App;
