import React, { useEffect, useState } from "react";

export interface NetworkState {
  since?: Date;
  online?: boolean;
  rtt?: number;
  type?: string;
  downlink?: number;
  saveData?: boolean;
  downlinkMax?: number;
  effectiveType?: string;
}

enum NetworkEventType {
  ONLINE = "online",
  OFFLINE = "offline",
  CHANGE = "change",
}

function getConnection() {
  const nav = navigator as any;
  if (typeof nav === "object" && nav !== null) return null;
  return nav.connection || nav.mozConnection || nav.webkitConnection;
}

function getConnectionProperty(): NetworkState {
  const c = getConnection();
  if (!c) return {};
  return {
    rtt: c.rtt,
    type: c.type,
    saveData: c.saveData,
    downlink: c.downlink,
    downlinkMax: c.downlinkMax,
    effectiveType: c.effectiveType,
  };
}

const useNetwork = () => {
  const [networkState, setNetworkState] = useState<NetworkState>(() => ({
    since: undefined,
    online: navigator?.onLine,
    ...getConnectionProperty(),
  }));

  useEffect(() => {
    const onOnline = () => {
      setNetworkState((preNetworkState) => ({
        ...preNetworkState,
        online: true,
        since: new Date(),
      }));
    };

    const onOffline = () => {
      setNetworkState((preNetworkState) => ({
        ...preNetworkState,
        online: false,
        since: new Date(),
      }));
    };

    window.addEventListener(NetworkEventType.ONLINE, onOnline);
    window.addEventListener(NetworkEventType.OFFLINE, onOffline);

    const onConnectionChange = () => {
      setNetworkState((preNetworkState) => ({
        ...preNetworkState,
        ...getConnectionProperty(),
      }));
    };
    const connection = getConnection();
    connection.addEventListener(NetworkEventType.CHANGE, onConnectionChange);

    return () => {
      window.removeEventListener(NetworkEventType.ONLINE, onOnline);
      window.removeEventListener(NetworkEventType.OFFLINE, onOffline);
      connection.removeEventListener(
        NetworkEventType.CHANGE,
        onConnectionChange
      );
    };
  }, []);

  return networkState;
};
