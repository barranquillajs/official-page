'use client';

import { ButtonNeumorphic, Card } from '@makinox/makinox-ui';

const clientClassname = `${ButtonNeumorphic()} ${Card()}`;

export const ClientStyleHelper = () => <div style={{ display: 'none' }} className={clientClassname} />;
