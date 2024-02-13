import css from './Profile.module.css'

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.container}>
            <div>
                <img className={css.image}
                    src={ image }
                    alt="User avatar"
                />
                <p className={css.title}>{ name }</p>
                <p>@{ tag }</p>
                <p>{ location }</p>
            </div>

            <ul className={css.list}>
                <li>
                    <span>Followers </span>
                    <span>{ stats.followers }</span>
                </li>
                <li>
                    <span>Views </span>
                    <span>{ stats.views }</span>
                </li>
                <li>
                    <span>Likes </span>
                    <span>{ stats.likes }</span>
                </li>
            </ul>
        </div>
    );
}

