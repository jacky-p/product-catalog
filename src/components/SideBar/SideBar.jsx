import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faFilter } from "@fortawesome/free-solid-svg-icons";
import ProductFilter from "../ProductFilter/ProductFilter";

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
            <FontAwesomeIcon icon={isCollapsed ? faFilter : faArrowLeft} />
          </button>
        </div>

        {!isCollapsed && (
          <ProductFilter
            filters={filters}
            setFilters={setFilters}
            handleFilterAction={handleFilterAction}
          />
          // <p className={styles.sidebarFilter}>Filter goes here</p>
        )}
      </div>

      <div className={styles.mainContent}>{children}</div>
    </div>
  );
}
