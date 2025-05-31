import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faFilter,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import ProductFilter from "../ProductFilter/ProductFilter";
import styles from "./Sidebar.module.css";

export default function Sidebar({
  filters,
  setFilters,
  handleFilterAction,
  children,
}) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className={styles.layout}>
      <div className={`${styles.sidebar} ${isCollapsed && styles.collapsed}`}>
        <div className={styles.sidebarHeader}>
          {!isCollapsed && <span className={styles.sidebarTitle}>Filter</span>}
          <button
            className={styles.toggleBtn}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <FontAwesomeIcon
              className={styles.sidebarIcon}
              icon={isCollapsed ? faFilter : faArrowLeft}
            />
          </button>

          {isCollapsed ? (
            <button
              className={styles.toggleMobileBtn}
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              Filter
            </button>
          ) : (
            <button
              className={styles.toggleMobileExit}
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <FontAwesomeIcon
                className={styles.sidebarMobileIcon}
                icon={faXmark}
              />
            </button>
          )}
          {/* <button
            className={styles.toggleMobileBtn}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              "Filter"
            ) : (
              <FontAwesomeIcon
                className={styles.sidebarMobileIcon}
                icon={faXmark}
              />
            )}
          </button> */}
        </div>

        <div className={styles.filterContianer}>
          {!isCollapsed && (
            <ProductFilter
              filters={filters}
              setFilters={setFilters}
              handleFilterAction={handleFilterAction}
            />
          )}
        </div>
      </div>

      <div className={styles.mainContent}>{children}</div>
    </div>
  );
}
