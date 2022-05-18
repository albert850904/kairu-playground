import React from "react";
import PropTypes from "prop-types";

import "./GridPhotoGallery.scss";

function GridPhotoGallery(props) {
  return (
    <section class="photo-grid">
      <div
        className="card photo-grid__card-wide"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1603553329474-99f95f35394f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80')`,
        }}
      >
        1
      </div>
      <div
        className="card photo-grid__card-tall"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
        }}
      >
        2
      </div>
      <div
        className="card"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1597687154732-9b205f4f5c1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80')`,
        }}
      >
        3
      </div>
      <div
        className="card"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1554223090-7e482851df45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1403&q=80')`,
        }}
      >
        4
      </div>
      <div
        className="card photo-grid__card-tall"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1610388558394-974601045c25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`,
        }}
      >
        5
      </div>
      <div
        className="card photo-grid__card-wide"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1571892413116-7fa28aaf3632?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80')`,
        }}
      >
        6
      </div>
      <div
        className="card photo-grid__card-wide"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544218159-ee555140c5b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
        }}
      >
        7
      </div>
      <div
        className="card"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611900713725-864f48309d67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
        }}
      >
        8
      </div>
      <div
        className="card photo-grid__card-wide"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1610205296858-54032f054586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80')`,
        }}
      >
        9
      </div>
      <div
        className="card"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')`,
        }}
      >
        10
      </div>
      <div
        className="card "
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1604280772307-d35d71d8a42a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80')`,
        }}
      >
        11
      </div>
      <div
        className="card"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1609386464554-31f6618a86b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
        }}
      >
        12
      </div>
    </section>
  );
}

GridPhotoGallery.propTypes = {};

export default GridPhotoGallery;
