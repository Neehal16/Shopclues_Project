import React from 'react';
import './Collections.css'
const Collections = () => {
    return (
        <div className="collections">
            <h3>Mens Collections</h3>
            <div className="mens">
                <div className="item">
                    <img src="assets/project photos/Mens/download.jpeg" alt="hah" />
                    <p>Rs-1999/- <del>2999/-</del></p>
                    <p style={{ color: 'green' }}>30% off</p>

                </div>
                <div className="item">
                    <img src="assets/project photos/Mens/download (2).jpeg" alt="hah" />
                    <p className="p2">Rs-799/- <del>1299/-</del></p>
                    <p style={{ color: 'green' }}>30% off</p>
                </div>
                <div className="item">
                    <img src="assets/project photos/Mens/download (3).jpeg" alt="hah" />
                    <p>Rs-899/- <del>1399/-</del></p>
                    <p style={{ color: 'green' }}>35% off</p>
                </div>
                <div className="item">
                    <img src="assets/project photos/Mens/download (4).jpeg" alt="hah" />
                    <p>Rs-599/- <del>899/-</del></p>
                    <p style={{ color: 'green' }}>25% off</p>
                </div>
                <div className="item">
                    <img src="assets/project photos/Mens/images.jpeg" alt="hah" />
                    <p>Rs-1599/- <del>2999/-</del></p>
                    <p style={{ color: 'green' }}>40% off</p>
                </div>
                <div className="item">
                    <img src="assets/project photos/Mens/images (2).jpeg" alt="hah" />
                    <p>Rs-999/- <del>1999/-</del></p>
                    <p style={{ color: 'green' }}>50% off</p>
                </div>
            </div>
            <br />
            <h3>Womens Collections</h3>
            <div className="womens">
                <div className="item">
                    <img src="assets/project photos/Womens/1.jpeg" alt="hah" />
                    <p>Rs-2599/- <del>3199/-</del></p>
                    <p style={{ color: 'green' }}>30% off</p>
                </div>
                <div className="item">
                    <img src="assets/project photos/Womens/2.jpeg" alt="hah" />
                    <p>Rs-2999/- <del>3999/-</del></p>
                    <p style={{ color: 'green' }}>40% off</p>
                </div>
                <div className="item">
                    <img src="assets/project photos/Womens/3.jpeg" alt="hah" />
                    <p>Rs-1999/- <del>2999/-</del></p>
                    <p style={{ color: 'green' }}>30% off</p>
                </div>
                <div className="item">
                    <img src="assets/project photos/Womens/5.jpeg" alt="hah" />
                    <p>Rs-2299/- <del>3599/-</del></p>
                    <p style={{ color: 'green' }}>25% off</p>
                </div>
                <div className="item">
                    <img src="assets/project photos/Womens/7.jpeg" alt="hah" />
                    <p>Rs-1499/- <del>2299/-</del></p>
                    <p style={{ color: 'green' }}>30% off</p>
                </div>
                <div className="item">
                    <img src="assets/project photos/Womens/9.jpeg" alt="hah" />
                    <p>Rs-2199/- <del>3399/-</del></p>
                    <p style={{ color: 'green' }}>40% off</p>
                </div>
            </div>
            <br />
            <h3>Kids Wear</h3>
            <div className="kids">
                <div className="item">
                    <img src="assets/project photos/Kids/kid7.jpeg" alt="haha" />
                    <p className="k1">Rs-999/- <del>1999/-</del></p>
                    <p style={{ color: 'green' }}>50% off</p>
                </div>
                <div className="item">
                    <img src="assets/project photos/Kids/kid8.jpeg" alt="haha" />
                    <p>Rs-1299/- <del>2699/-</del></p>
                    <p style={{ color: 'green' }}>50% off</p>
                </div>
                <div className="item">
                    <img src="assets/project photos/Kids/kid6.jpeg" alt="haha" />
                    <p>Rs-899/- <del>1599/-</del></p>
                    <p style={{ color: 'green' }}>30% off</p>
                </div>
                <div className="item">
                    <img src="assets/project photos/Kids/kid5.jpeg" alt="haha" />
                    <p>Rs-1399/- <del>2699/-</del></p>
                    <p style={{ color: 'green' }}>45% off</p>
                </div>
                <div className="item">
                    <img src="assets/project photos/Kids/kid4.jpeg" alt="haha" />
                    <p>Rs-999/- <del>1999/-</del></p>
                    <p style={{ color: 'green' }}>50% off</p>
                </div>
                <div className="item">
                    <img src="assets/project photos/Kids/kid8.jpeg" alt="haha" />
                    <p>Rs-1299/- <del>2699/-</del></p>
                    <p style={{ color: 'green' }}>50% off</p>
                </div>
            </div>
            <br />
            <h3>Beauty</h3>
            <div className="beauty">
                <div className="item">
                    <img src="assets/project photos/makeup/01.jpeg" alt="hah" />
                    <p>Rs-399/- <del>699/-</del></p>
                    <p style={{ color: 'green' }}>50% off</p>
                </div>
                <div className="item">
                    <img src="assets/project photos/makeup/07.jpeg" alt="hah" />
                    <p>Rs-299/- <del>499/-</del></p>
                    <p style={{ color: 'green' }}>30% off</p>
                </div>
                <div className="item">
                    <img src="assets/project photos/makeup/03.jpeg" alt="hah" />
                    <p>Rs-99/- <del>179/-</del></p>
                    <p style={{ color: 'green' }}>40% off</p>
                </div>
                <div className="item">
                    <img src="assets/project photos/makeup/09.jpeg" alt="hah" />
                    <p>Rs-129/- <del>199/-</del></p>
                    <p style={{ color: 'green' }}>30% off</p>
                </div>
                <div className="item">
                    <img src="assets/project photos/makeup/05.jpeg" alt="hah" />
                    <p>Rs-119/- <del>189/-</del></p>
                    <p style={{ color: 'green' }}>35% off</p>
                </div>
            </div>
        </div>
    );
};

export default Collections;
